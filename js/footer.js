let item=$('.text-muted .foot-link')

item.click((ev)=>{
   
    let componentUrl= `/components/${$(ev.target).attr('data-component')}.html`
    $('#content').load(componentUrl)
 
 })

