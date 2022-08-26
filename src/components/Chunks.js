import Chunk from './Chunk'

const Chunks = ({ chunks }) => {
    return (
        <>
         {chunks.map((chunk) => (
            <Chunk key={chunk.id} chunk={chunk} />
         ))}    
        </>
    )
}

export default Chunks


// key={chunk.id}