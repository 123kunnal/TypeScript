type EventClick='click' | 'scroll' | 'mousemove'
type ExcludeEvent=Exclude<EventClick,'scroll'>
 const handleEvent=(event:ExcludeEvent)=>{
    console.log(`Handling Event ${event}`);
    
 }

 handleEvent('click')  //OK
//  handleEvent('scroll')