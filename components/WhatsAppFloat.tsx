import { MessageCircle } from 'lucide-react';
import { wa } from '@/lib/site';
export default function WhatsAppFloat(){return <a className="whatsapp-float" href={wa('Hello Laxmi Solar Tech Solution, I would like to know more about your solar installation services.')} target="_blank" rel="noreferrer" aria-label="Chat with Laxmi Solar Tech Solution on WhatsApp"><MessageCircle size={22}/><span>Chat with us</span></a>}
