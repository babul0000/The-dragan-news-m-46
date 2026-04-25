export const category = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    const data = await res.json()
    return data;
}


export const categoryId = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
    const data = await res.json()
    return data;
}


export const newParams = async (news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    const data = await res.json()
    return data.data[0];
}

