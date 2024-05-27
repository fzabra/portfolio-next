import { Metadata } from 'next'
import Home from './components/Home/Home';
 
export const metadata: Metadata = {
  title: 'Fabricio Sobral',
}
export default function Page() {
  
  return<div>
    <Home />
  </div>
}

