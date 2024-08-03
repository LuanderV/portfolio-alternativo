import { ProjectDetails } from '@/app/components/pages/project/project-details';
import { ProjectSections } from '@/app/components/pages/project/project-sections';
import { ProjectPageData, ProjectsPageStaticData } from '@/app/types/page-info';
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData | null> => {
  const query = `
    query ProjectQuery {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }
  `;

  const data = await fetchHygraphQuery<ProjectPageData>(query, 60 * 60 * 24);
  return data;
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const data = await getProjectDetails(slug);

  if (!data?.project?.title) {
    return notFound();
  }

  const { project } = data;

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery {
      projects(first: 100) {
        slug
      }
    }
  `;
  const data = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return data?.projects.map((project) => ({ slug: project.slug })) || [];
}

export async function generateMetadata({ params: { slug } }: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data?.project;

  if (!project) {
    return {
      title: 'Project not found',
      description: '',
    };
  }

  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [
        {
          url: project.thumbnail.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
