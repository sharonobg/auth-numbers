import supabase from '@/app/utils/supabase';
import '@/app/globals.css';

export const revalidate = 0;

export default async function getTransactions() {

    const { data: transactionsn,error } = await supabase
      .from("transactionsn")
      .select("*");

      if (error){
        throw new Error('transactions error');
      }

    //console.log('transactions data',{transactions});
    
    
    return (
      <>
      
    <pre>Transactions: {JSON.stringify(transactionsn, null, 2)}</pre>
    <ul>
    {transactionsn.map((transaction,index) => (
      
                <li key={transaction.id}>
                  <span>{transaction.description}</span>
                  <span>{transaction.account_type}</span>
                  <span>{transaction.amount}</span>
                  {/*<span>{transaction.users.first_name}</span>
                  <span>{transaction.categories.title}</span>*/}
                </li>
                
                  
                
            )
            
            )
            
        }
      
        </ul>

        
    </>

    )
    

}