import './steps.css';

interface Props {
    numberOfSteps: number;
    activeStep: number;
}

export const Steps = ({ numberOfSteps, activeStep }: Props) => (
    <div className="steps">
        {
            (new Array(numberOfSteps).fill(0)).map((_, index: number) => (
                <span
                    key={index}
                    style={{
                        backgroundColor: activeStep === index ? '#489DDA' : 'transparent'
                    }}
                />
            ))
        }
    </div>
)