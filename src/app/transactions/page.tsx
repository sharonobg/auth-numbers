import supabase from '@/app/utils/supabase';
import '@/app/globals.css';

export const revalidate = 0;
export default async function getData() {
    const { data: transactions,error } = await supabase
      .from("transactions")
      .select(
        `*,
        users("*"),
        categories("*")
        
        
      `);

      if (error){
        throw new Error('transactions error');
      }

    //console.log('transactions data',{transactions});
    
    
    return (
      <>
      
    <pre>{JSON.stringify(transactions, null, 2)}</pre>
    <ul>
    {transactions.map((transaction,index) => (
      
                <li key={transaction.id}>
                  <span>{transaction.description}</span>
                  <span>{transaction.account_type}</span>
                  <span>{transaction.amount}</span>
                  <span>{transaction.users.first_name}</span>
                  <span>{transaction.categories.title}</span>
                </li>
                
                  
                
            )
            
            )
            
            
        }
      
        </ul>

        
    </>

    )
    

}