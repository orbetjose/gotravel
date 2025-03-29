const domain = import.meta.env.VITE_WP_DOMAIN
const apiUrl = `${domain}wp-json/wp/v2`

  

export const getMenuInfo = async (endpoint : string) => {
    const response = await fetch(`${apiUrl}/${endpoint}`)
    if(!response.ok) throw new Error('Failed to fetch menu info')
    
    const data = await response.json()
    
    return data
}

export const getPageInfo = async (slug: string) => {
    const response = await fetch(`${apiUrl}/pages?slug=${slug}&_fields=acf`)
    if(!response.ok) throw new Error('Failed to fetch page info')

    const data = await response.json()
    
    return data
}

export const getProjectsInfo = async () => {
    const response = await fetch(`${apiUrl}/pages?parent=17`)
    if(!response.ok) throw new Error('Failed to fetch projects info')
    
    const data = await response.json()
    
    return data
}