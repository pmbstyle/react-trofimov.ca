import { historyShown } from '../../store/terminal'

const HistoryItem = ({item:Object}) => {
    if(typeof item.output === 'string') {
        return (
            <div className="history-output markdown-content" dangerouslySetInnerHTML={{ __html: item.output }}></div>
        )
    } else {
        return (
            <div className="history-output-grid">
                { item.output.map((outputItem:object, index:number) => {
                    <div className="history-output-grid-item">
                        <p className={'text-color-'+output.color+' text-weight-'+output.weight}>
					        { output.text }
				        </p>
                    </div>
                })}
            </div>
        )
    }
}

const TerminalHistory = (): JSX.Element => {
    return (
        <div>
            { historyShown.map((item:object, index:number) => {
                <div className="history-item">
                    <HistoryItem item={item} />
                </div>
            })}
        </div>
    );
}

export default TerminalHistory