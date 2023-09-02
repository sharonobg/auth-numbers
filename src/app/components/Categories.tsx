import supabase from '@/app/utils/supabase';

export const revalidate = 0;

export default async function getCategories() {
 
    const { data: categories,error } = await supabase
      .from("categories")
      .select("*");
      if (error){
        throw new Error('categories error');
      }
    //console.log('Categories data',{categories});
    return (
      <>
    <pre>{JSON.stringify(categories, null, 2)}</pre>
    </>)


}