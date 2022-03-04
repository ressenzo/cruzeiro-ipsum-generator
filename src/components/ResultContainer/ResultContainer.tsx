import { forwardRef, LegacyRef } from "react";
import './ResultContainer.css';

interface ResultContainerInterface {
    result: string[]
}

const ResultContainer = forwardRef(({ result }: ResultContainerInterface, ref) => {
    return (
        <div className="row result-container" ref={ref as LegacyRef<HTMLDivElement>}>
            {
                result.map((p, index) => {
                    return (
                        <p key={index}>{p}</p>
                    )
                })
            }
        </div>
    );
})

export default ResultContainer;

