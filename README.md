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
For this instance it will check /blog/post === /blog/post

it also excludes dynamic routes when checking.
```