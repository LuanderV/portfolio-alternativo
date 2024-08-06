import { HeroSection } from './components/pages/home/hero-section'
import { HighlightedProjects } from './components/pages/home/highlighted-projects'
import { KnownTechs } from './components/pages/home/known-techs'
import Skills from './components/skills'
import { WorkExperience } from './components/pages/home/work-experience'
import { HomePageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

export const metadata = {
  title: 'Home',
}

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
      skills {
        title
        image {
          url
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    1
  )
}

export default async function Home() {
  const { page: pageData, workExperiences, skills } = await getPageData()

  console.log('Skills:', skills)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs}/>
      <Skills skills={skills} />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}