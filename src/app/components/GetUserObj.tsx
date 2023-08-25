
import supabase from '@/app/utils/supabase';

export default async function getUserObj() {
    try {
      const {data: { user}} = await supabase.auth.getUser();

   if (user) {
        console.log(user.email)
      }
    } catch (error) {
      console.log(error)
    } finally {
      
}
};

