export type BoardViewProps = {
    boardState: string[];
    handleMove: (arg0: number) => void;
}

export const BoardView:React.FC<BoardViewProps> = ({boardState, handleMove}) => (<table><tbody>
        {[0, 1, 2].map((i) => (<tr key={i}>
                {[0, 1, 2].map((j) => {
                    const index = j + i * 3;
                    return (<td key={index} data-testid={index} onClick={() => handleMove(index)}>{boardState[index]}</td>);
                 })}
            </tr>)
        )}
    </tbody></table>);