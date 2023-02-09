# next-active-route 

## Installation
$ npm install next-active-route

## 🚀 Usage

```ts
/**
 *  @param1 next router
 *  @param2 url string
 *  @param3 level of url to check default is 1
 */
isRoute(@param1: NextRouter, @param2: string, @param3: number)
```
### Example
```tsx
import { isRouteActive } from 'next-active-route';
import Link from "next/link";
import { useRouter } from 'next/router'

function MyPage() {
    const router = useRouter();

    const href = `/blog/post/${'3'}`;

    return (
        <>
            <Link href={href} 
                className={`${isRouteActive(router, href, 2) ? 'text-gray-200': 'text-gray-500'}>
                Single Post
            </Link>
        <>
    )
}
```
```ts
Level of checking

isRouteActive(router, href, 1)
/blog === /blog

isRouteActive(router, href, 2)
/blog/post === /blog/post

isRouteActive(router, href, 3)
/blog/post/3 === /blog/post/[dynamicId]

it excludes dynamic routes when checking.
```