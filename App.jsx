import React from 'react';
import Timer from './timer';
import './App.css';

class TopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: 30};
    }

    render(){
        const questionBank = this.props.questionBank;
        return(
            <div className="top-bar">
                <h1>CPA</h1>

                <p id='title-box'>Financial Accounting and Reporting</p>

                <div id='stats-box'>
                    <Timer time={this.state.time} />
                    <p id="displayScore">Score 0 / {questionBank.length}</p>
                </div>

                <button id='exit-button'>Quit</button>
            </div>
        );
    }
}

class QuestionBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="question-area">
                <div className="question active">
                    <div className="question-number">
                        <h2>Question 1</h2>
                    </div>
                    <div className="question-text">
                        <p>According to the FASB conceptual framework, the objectives of financial reporting for business enterprises are based on</p>
                    </div>
                    <div className="radio-btn-answers">
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                The need for conservatism.
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                Generally accepted accounting principles.
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                Reporting for regulators.
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                The needs of the users of the information.
                            </label>
                        </div>
                    </div>
                    <div className="hint">
                        <h3>Hint:</h3>
                        <p>Financial reporting is for the users</p>
                    </div>
                    <div className="explanation">
                        <h3>Explanation</h3>
                        <p>(d) Per SFAC 8, the objectives of financial reporting focus on providing present and potential investors and creditors with information useful in making investment decisions. Financial statement users do not have the authority to prescribe the data they desire. Therefore, they must rely on external financial reporting to satisfy their information needs, and the objectives must be based on the needs of those users.</p>
                    </div>
                </div>
                <div className="question">
                    <div className="question-number">
                        <h2>Question 2</h2>
                    </div>
                    <div className="question-text">
                        <p>According to Statements of Financial Accounting Concepts, neutrality is an ingredient of: Faithful representation | Relevance</p>
                    </div>
                    <div className="radio-btn-answers">
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                YES | YES
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                NO | YES
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                YES | NO
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="answer_group0" />
                                NO | NO
                            </label>
                        </div>
                    </div>
                    <div className="hint">
                        <h3>Hint:</h3>
                        <p>neutral info is free from bias, unbiased info is more reliable; unbiased info is not ALWAYS relevant; relevance is for usefulness</p>
                    </div>
                    <div className="explanation">
                        <h3>Explanation</h3>
                        <p>(b) SFAC 8 defines neutrality as the quality of information which requires freedom from bias toward a predetermined result. Unbiased information would always be more faithfully represented than biased information. Other components of faithful representation include information to be verifiable and free from error. Neutrality is not an ingredient of relevance because relevance requires information to have predictive value and confirmatory value, or both.</p>
                    </div>
                </div>

            </div>
        );
    }
}

class FlagButton extends React.Component{
    render(){
        const number = this.props.number
        return(
            <div>
                <button className="question-button" value={number}>{number}</button>
                <input type="checkbox" name={"flag_" + number} id={"flag_"+ number} />
            </div>
        );
    }
}

class BottomBar extends React.Component{
    render(){
        const flags = [];
        this.props.questionBank.forEach((questionItem, index) => {
            flags.push(
                <FlagButton number={ (index+1) } key={questionItem.question} />
            );
        });
        
        return(
            <div className="bottom-bar">
                <div className="bottom-reminder">
                    <label>
                        <input type="checkbox" name="reminder" checked disabled></input>
                        = Reminder
                    </label>
                </div>

                <div className="flag-buttons">
                    {flags}
                </div>

                <div className="arrow-nav">
                    <button id='previous' type="button" value="previous">Previous</button>
                    <button id='next' type="button" value="next">Next</button>
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render(){

        return (
            <div className="App">
                <TopBar questionBank={this.props.questionBank}/>
                <QuestionBar />
                <BottomBar questionBank={this.props.questionBank} />
            </div>
        );
    }
}

export default App;
