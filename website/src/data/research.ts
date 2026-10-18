export type Material = { title: string; detail: string; type: string; status: string; path: string }
export const project = {
  updated: '18 October 2026',
  question:
    'How does satisfaction with a prepared CV differ between students who used AI and those who did not?',
  repository: 'https://github.com/jinnnhn/ADS401_GroupD',
}
export const milestones = [
  {
    stage: '01',
    title: 'Define the study',
    status: 'Prepared',
    detail:
      'Research questions, target participants and the observational survey design are documented.',
  },
  {
    stage: '02',
    title: 'Prepare the materials',
    status: 'Current stage',
    detail:
      'Presentation 2 and a 14-question survey flow are prepared. Participant information still contains administrative placeholders.',
  },
  {
    stage: '03',
    title: 'Pilot and collect',
    status: 'Next',
    detail:
      'Confirm the live form, complete participant information, and document pilot feedback and recruitment.',
  },
  {
    stage: '04',
    title: 'Analyse and reflect',
    status: 'Planned',
    detail:
      'Compare satisfaction responses, report uncertainty and reflect on the limits of the study.',
  },
]
export const materials: Material[] = [
  {
    title: 'Presentation 2',
    detail:
      'Research questions, sampling, questionnaire and analysis plan. Public copy without the signed submission cover.',
    type: 'PDF · 6 pages',
    status: 'Prepared',
    path: 'documents/ADS401_GroupD_Presentation2Slides_Public.pdf',
  },
  {
    title: 'Participant materials',
    detail:
      'Information sheet, consent form and questionnaire flow. Contact and retention details remain placeholders.',
    type: 'PDF · 3 pages',
    status: 'Draft',
    path: 'documents/ADS401_GroupD_Presentation2SupplementaryMaterials.pdf',
  },
  {
    title: 'Questionnaire flow',
    detail:
      'The agreed 14-question structure, including the shared satisfaction item and conditional branches.',
    type: 'PNG · full resolution',
    status: 'Prepared',
    path: 'images/questionnaire-flow.png',
  },
]
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`
