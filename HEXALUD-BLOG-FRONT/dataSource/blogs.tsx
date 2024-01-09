type Blog={
    id:number,
    title:string,
    author:string,
    content:string,
    creationDate:Date
}

export function getBlogs(): Blog[] {
    let entries:Blog[]=[]
    for (let index = 0; index < 50; index++) {
        const element :Blog = {
            id:index,
            title:'titulo'+index,
            author:'autor'+index,
            content:'contenen'+index,
            creationDate:new Date()
        }
        entries.push(element)
    }
    return entries
}

export function createBlog(a: number, b: number): number {
    return a * b;
}