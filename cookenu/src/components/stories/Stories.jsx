import './stories.scss'

const Stories = () => {

    //DADOS TEMPORARIOS

    const stories = [
        {
            id:1,
            name:'Fernanda Santos',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYdM8r8elMwNFso5N_eOz9sxPpQjwiOLmCQ&usqp=CAU'
        },

        {
            id:2,
            name:'Henrrique Cardoso',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqH1Iqabwg71_eZk3kwO7m-UYHm_pETONzQ&usqp=CAU'
        },

        {
            id:3,
            name:'João Filesbino',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhE4t9DCp80VX70arVM7hm5Cy56vjK9Ht9hcPtq9ZTyYE5ygSTSjgyLJBYSOXjL1Es7E&usqp=CAU'
        },

        {
            id:4,
            name:'Monique Safe',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwdhuC35gsz9x2-1I2mXPWZtzBENK0PPOFw&usqp=CAU'
        },

    ]

  return (
    <div className='stories'>
         {stories.map(story=>(
            <div className='story'>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories