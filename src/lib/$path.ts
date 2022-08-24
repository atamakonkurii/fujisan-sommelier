export const pagesPath = {
  "posts": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  img: {
    exp_fujisan_webp: '/img/exp_fujisan.webp',
    face_webp: '/img/face.webp'
  }
} as const

export type StaticPath = typeof staticPath
