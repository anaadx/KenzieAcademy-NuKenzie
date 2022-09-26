import { useState } from "react";
import "./reset.css"
import "./globalStyles.css"
import "./App.css";
import { Form } from "./components/Form";
import Header from "./components/Header";
import { List } from "./components/List";
import StartPage from "./components/StartPage";


function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isPage, setPage] = useState(true);

  if(isPage){
    return (
      <div className="App">
             <Header isPage={isPage} setPage={setPage}/>
             <main>
               <Form
                 listTransactions={listTransactions}
                 setListTransactions={setListTransactions}
               />
               <List
                 listTransactions={listTransactions}
                 setListTransactions={setListTransactions}
               />
             </main>
      </div>
    );
  }else{
    return(
      <div className="App">
         <StartPage isPage={isPage} setPage={setPage}/>
      </div>
    )
  }
}

export default App;
