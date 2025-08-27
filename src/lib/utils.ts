export const getCategories = async() => {
    // const res = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await res.json();
    console.log(data);
    return data;
}