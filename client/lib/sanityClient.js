import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'vezzesba',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skMbRpu1LfxAAfNSMtjSGLPlKpIoNRwnAc8aYRelatCpwy2YdZX44PZrtj3zPjUrcbraDVBzqNPvHBzjrA8CqruipcgSbYoXwn28lZPwzMpfr63jJcdCfM4mMHhxIE63ogPrnsqXYiWP455676GFupR5V2qiQw0N0nVrGnCXpSWYnpY8beKY',
  useCdn: false,
})
