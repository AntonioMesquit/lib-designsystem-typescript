import '../styles/tokens-grid.css'
interface TokensGridProps{
    tokens: Record<string, string>;
    hasRemValue?: boolean
    bd?: boolean
}
export function TokensGrid({tokens, hasRemValue = false, bd = false}: TokensGridProps){
    return(
        <table className='tokens-grid'>
            <thead>
                <th>Nome</th>
                <th style={{borderColor: 'transparent'}}>Valor</th>
                {hasRemValue && <th>Pixels</th>}
                {bd && <th>Formato</th>}
            </thead>
            <tbody>
            {Object.entries(tokens).map(([key, value]) => {
                return(
                    <tr key={key}>
                        <td>{key}</td>
                        <td style={{borderColor: 'transparent'}}>{value}</td>
                {hasRemValue && (
                    <td>{Number(value.replace('rem' , '')) * 16}px</td>
                )}
                  {bd && (
                    <td style={{position: 'relative'}}>
                        <span className='borda' style={{position: 'absolute' ,borderRadius: value, width: "30px", height: "20px", backgroundColor: "white", top: "10px", left: "25px"}}></span>
                    </td>
                )}


                    </tr>
                )
            })}
            </tbody>
        </table>
      
    )
}