import React from 'react';
import Timer from './timer';
import './App.css';

class TopBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: 30};
        this.handleQuitButton = this.handleQuitButton.bind(this);
    }

    handleQuitButton(){
        this.props.handleQuitButton();
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

                <input type='button'
                        id='exit-button'
                        value='Quit'
                        onClick={this.handleQuitButton} />
            </div>
        );
    }
}

class AnswerItem extends React.Component {
    constructor(props){
        super(props);
        this.handleAnswerChoiceChange = this.handleAnswerChoiceChange.bind(this);

    }

    handleAnswerChoiceChange(e){
        this.props.handleAnswerChoiceChange(e);
    }

    render(){
        const answerItem = this.props.answerItem.choice;
        const currentQuestionIndex = this.props.currentQuestionIndex;
        const isChecked = this.props.answerItem.choice == this.props.answerChoices[this.props.currentQuestionIndex];

        return(
            <div>
                <label>
                    <input type="radio"
                            name={"answer_group" + currentQuestionIndex}
                            value={answerItem}
                            checked={isChecked} 
                            onChange={this.handleAnswerChoiceChange} />
                    {answerItem}
                </label>
            </div>
        );
    }
}

class HintItem extends React.Component{
    render(){
        return(
            <p>{this.props.hintText}</p>
        );
    }
}

class QuestionItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHintVisible: false,
        }
        this.handleHintButton = this.handleHintButton.bind(this);
        this.handleAnswerChoiceChange = this.handleAnswerChoiceChange.bind(this);
    }

    handleHintButton() {
        this.setState({ isHintVisible: !this.state.isHintVisible });
    }

    handleAnswerChoiceChange(e){
        this.props.handleAnswerChoiceChange(e);
    }

    render(){
        const questionNum = this.props.currentQuestionIndex+1;
        const questionText = this.props.questionItem.question;
        const questionExplanation = this.props.questionItem.explanation;
        const currentQuestionIndex = this.props.currentQuestionIndex;
        const answerChoices = this.props.questionItem.choices;
        var isHintVisible = this.state.isHintVisible;

        const answerItems = [];
        answerChoices.forEach((answerChoice, index) => {
            answerItems.push(
                <AnswerItem answerItem={answerChoice}
                            currentQuestionIndex={currentQuestionIndex}
                            answerChoices={this.props.answerChoices}
                            key={answerChoice.choice} 
                            handleAnswerChoiceChange={this.handleAnswerChoiceChange} />
            );
        });

        var questionHint = [];
        if (isHintVisible) {
            questionHint.push(
                <HintItem hintText={this.props.questionItem.hint}
                            key={this.props.questionItem.hint} />
            );
        }

        return(
            <div className="question ">
                <div className="question-number">
                    <h2>Question {questionNum}</h2>
                </div>
                <div className="question-text">
                    <p>{questionText}</p>
                </div>
                <div className="radio-btn-answers">
                    {answerItems}
                </div>
                <br />
                <div className="hint">
                    <input type="button"
                           value="Hint"
                           onClick={this.handleHintButton} />
                    {questionHint}
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

    constructor(props){
        super(props);
        this.handleAnswerChoiceChange = this.handleAnswerChoiceChange.bind(this);
    }

    handleAnswerChoiceChange(e){
        this.props.handleAnswerChoiceChange(e);
    }

    render(){
        const currentQuestionIndex = this.props.currentQuestionIndex;
        const question = this.props.questionBank[currentQuestionIndex];

        // const questionItems = [];
        // this.props.questionBank.forEach((question, index) => {
        //     questionItems.push(
        //         <QuestionItem questionItem={question} questionNum={index+1} key={question.question} />
        //     );
        // });

        //{questionItems}

        return(
            <div className="question-area">
                <QuestionItem questionItem={question}
                              currentQuestionIndex={currentQuestionIndex} 
                              answerChoices={this.props.answerChoices}
                              handleAnswerChoiceChange={this.handleAnswerChoiceChange} />
            </div>
        );
    }
}

class FlagButton extends React.Component{

    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e) {
        this.props.onButtonClick(e);
    }

    render(){
        const number = this.props.number
        return(
            <div>
                <input type="button"
                       className="question-button"
                       value={number}
                       onClick={this.handleButton} />
                <input type="checkbox"
                       name={"flag_" + number}
                       id={"flag_"+ number} />
            </div>
        );
    }
}

class BottomBar extends React.Component{

    constructor(props){
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e){
        this.props.onButtonClick(e.target.value);
    }

    render(){
        const flags = [];
        this.props.questionBank.forEach((questionItem, index) => {
            flags.push(
                <FlagButton number={ (index+1) }
                            key={questionItem.question}
                            onButtonClick={this.handleButton} />
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
                    <input id='Previous' 
                            type="button"
                            value="Previous"
                            onClick={this.handleButton} />
                    <input id='Next'
                            type="button"
                            value="Next"
                            onClick={this.handleButton} />
                </div>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            answerChoices: [],
        };
        this.handleButton = this.handleButton.bind(this);
        this.handleQuitButton = this.handleQuitButton.bind(this);
        this.handleAnswerChoiceChange = this.handleAnswerChoiceChange.bind(this);
    }

    handleQuitButton(){
        console.log("App Bar: Quit Button pressed")
        //check reminder flags
        //end game
        //stopTimer
        //gradeForm
        //display score
        //display explanation text
    }

    handleAnswerChoiceChange(e){
        const newAnswer = e.target.value;
        const newAnswerChoices = this.state.answerChoices;
        newAnswerChoices[this.state.currentQuestionIndex] = newAnswer;
        this.setState({
            answerChoices: newAnswerChoices,
        });
    }


    handleButton(targetValue){
        let newQuestionIndex = this.state.currentQuestionIndex;
        switch(targetValue){
            case "Previous":
                this.state.currentQuestionIndex <= 0 ? newQuestionIndex = (this.props.questionBank.length - 1) : newQuestionIndex--;
                break;
            case "Next":
                this.state.currentQuestionIndex >= (this.props.questionBank.length - 1) ? newQuestionIndex = 0 : newQuestionIndex++;
                break;
            default:
                newQuestionIndex = targetValue -1;
        }
        this.setState({
            currentQuestionIndex: newQuestionIndex
        });
    }

    render(){

        return (
            <div className="App">
                <TopBar questionBank={this.props.questionBank}
                        handleQuitButton={this.handleQuitButton} />
                <QuestionBar questionBank={this.props.questionBank} 
                             currentQuestionIndex={this.state.currentQuestionIndex}
                             answerChoices={this.state.answerChoices}
                             handleAnswerChoiceChange={this.handleAnswerChoiceChange} />
                <BottomBar questionBank={this.props.questionBank} 
                           onButtonClick={this.handleButton} />
            </div>
        );
    }
}

export default App;
