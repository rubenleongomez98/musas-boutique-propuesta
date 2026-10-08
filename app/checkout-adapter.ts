export type DemoOrderLine={id:number;size:string;color:string;qty:number};
export type CheckoutMode='demo'|'online'|'whatsapp';
export interface CheckoutAdapter{mode:CheckoutMode;submit(lines:DemoOrderLine[]):Promise<{simulated:boolean;reference:string}>;}
// Future adapters must be configured with confirmed payment credentials or WhatsApp contact.
export const demoCheckout:CheckoutAdapter={mode:'demo',async submit(){return {simulated:true,reference:'SIMULACIÓN'}}};
