export const pagesPath = {
  "news": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[id]' as const, query: { id }, hash: url?.hash })
    }),
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash })
  },
  "posts": {
    _id: (id: string | number) => ({
      "new": {
        $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]/new' as const, query: { id }, hash: url?.hash })
      },
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "privacy_policy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacy_policy' as const, hash: url?.hash })
  },
  "specific_commercial_transaction": {
    $url: (url?: { hash?: string }) => ({ pathname: '/specific_commercial_transaction' as const, hash: url?.hash })
  },
  "term": {
    $url: (url?: { hash?: string }) => ({ pathname: '/term' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  img: {
    exp_fujisan_webp: '/img/exp_fujisan.webp',
    face_webp: '/img/face.webp',
    ogotte_banner_webp: '/img/ogotte_banner.webp'
  }
} as const

export type StaticPath = typeof staticPath
