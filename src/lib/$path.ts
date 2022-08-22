export const pagesPath = {
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
