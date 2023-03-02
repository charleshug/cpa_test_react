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

class AnswerItem extends React.Component {
    render(){
        const answerItem = this.props.answerItem.choice;
        const answerGroupNum = this.props.answerGroupNum;

        return(
            <div>
                <label>
                    <input type="radio" name={"answer_group" + answerGroupNum} />
                    {answerItem}
                </label>
            </div>
        );
    }
}

class QuestionItem extends React.Component {
    render(){
        const questionNum = this.props.questionNum;
        const questionText = this.props.questionItem.question;
        const questionHint = this.props.questionItem.hint;
        const questionExplanation = this.props.questionItem.explanation;
        const answerGroupNum = this.props.questionNum-1;
        const answerChoices = this.props.questionItem.choices;

        const answerItems = [];
        answerChoices.forEach((answerChoice, index) => {
            answerItems.push(
                <AnswerItem answerItem={answerChoice} answerGroupNum={answerGroupNum} key={answerChoice.choice} />
            );
        });

        return(
            //className="active" only for the first question
            <div className="question active">
                <div className="question-number">
                    <h2>Question {questionNum}</h2>
                </div>
                <div className="question-text">
                    <p>{questionText}</p>
                </div>
                <div className="radio-btn-answers">
                    {answerItems}
                </div>
                <div className="hint">
                    <h3>Hint:</h3>
                    <p>{questionHint}</p>
                </div>
                <div className="explanation">
                    <h3>Explanation</h3>
                    <p>{questionExplanation}</p>
                </div>
            </div>
        );
    }
}

class QuestionBar extends React.Component{
    render(){
        const questionItems = [];
        this.props.questionBank.forEach((question, index) => {
            questionItems.push(
                <QuestionItem questionItem={question} questionNum={index+1} key={question.question} />
            );
        });

        return(
            <div className="question-area">
                {questionItems}
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
    render(){

        return (
            <div className="App">
                <TopBar questionBank={this.props.questionBank}/>
                <QuestionBar questionBank={this.props.questionBank} />
                <BottomBar questionBank={this.props.questionBank} />
            </div>
        );
    }
}

export default App;
