import { useSelector } from 'react-redux'
export interface File {
    text: string;
    color: string;
    weight: string;
}
interface History {
    command: string;
    output: string | File[];
    pwd: string;
    show?: boolean;
    isEmpty?: boolean;
}

const TerminalHistory = () => {
    const state = useSelector((state: any) => state)
    const HistoryItem = (item:History) => {
        if(typeof item.output === 'string') {
            return (
                <div className="history-output markdown-content" dangerouslySetInnerHTML={{ __html: item.output }}></div>
            )
        } else {
            return (
                <div className="history-output-grid">
                    { item.output.map((outputItem:File, index:number) => {
                        return (
                            <div className="history-output-grid-item" key={index}>
                                <p className={'text-color-'+outputItem.color+' text-weight-'+outputItem.weight}>
                                    { outputItem.text }
                                </p>
                            </div>
                        )
                    }, this) }
                </div>
            )
        }
    }
    return (
        <div>
            {   state.history.length > 0 &&
                state.history.filter((h:History) => h.show).map((item:History, index:number) => {
                return (
                    <div className="history-item">
                        { item.isEmpty && <div className="history-output"></div> }
                        { !item.isEmpty && <HistoryItem {...item} /> }
                    </div>
                )
            }, this) }
        </div>
    );
}

export default TerminalHistory