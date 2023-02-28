import React from 'react';
import Timer from './timer';
import './App.css';

var questionBank = [
  {
      question: 'What are the Statements of Financial Accounting Concepts intended to establish?',
      choices: [
          { choice: 'Generally accepted accounting principles in financial reporting by business enterprises.',
              value: 'false'
          },
          { choice: 'The meaning of “Present fairly in accordance with generally accepted accounting principles.”',
              value: 'false'
          },
          { choice: 'The objectives and concepts for use in developing standards of financial accounting and reporting.',
              value: 'true'
          },
          { choice: 'The hierarchy of sources of generally accepted accounting principles.',
              value: 'false'
          }
      ],
      hint: "SFAC are not GAAP, but provide guidance when no GAAP exists; they're the framework to financial stds",
      explanation: '(c) The Statements of Financial Accounting Concepts (SFAC) were issued to establish a framework from which financial accounting and reporting standards could be developed. The SFAC provide the theory behind accounting and reporting and provide guidance when no GAAP exists. The SFAC are not included as GAAP.'
  },
  {
      question: 'According to the FASB conceptual framework, the objectives of financial reporting for business enterprises are based on',
      choices: [
          { choice: 'Generally accepted accounting principles.',
              value: 'false'
          },
          { choice: 'Reporting for regulators.',
              value: 'false'
          },
          { choice: 'The need for conservatism.',
              value: 'false'
          },
          { choice: 'The needs of the users of the information.',
              value: 'true'
          }
      ],
      hint: 'financial reporting is for the users',
      explanation: '(d) Per SFAC 8, the objectives of financial reporting focus on providing present and potential investors and creditors with information useful in making investment decisions. Financial statement users do not have the authority to prescribe the data they desire. Therefore, they must rely on external financial reporting to satisfy their information needs, and the objectives must be based on the needs of those users.'
  },
  {
      question: 'According to the FASB conceptual framework, the relevance of providing information in financial statements is subject to the constraint of',
      choices: [
          { choice: 'Comparability.',
              value: 'false'
          },
          { choice: 'Cost-benefit.',
              value: 'true'
          },
          { choice: 'Reliability.',
              value: 'false'
          },
          { choice: 'Faithful representation.',
              value: 'false'
          }
      ],
      hint: 'Information is not reported if the cost outweighs the benefit or if it is immaterial',
      explanation: '(b) The FASB conceptual framework has identified the cost-benefit constraint to the relevance of providing financial reports. Information is not disclosed if the costs of disclosure outweigh the benefits of providing the information. Comparability is an enhancing qualitative characteristic. Reliability is no longer part of the conceptual framework according to SFAC 8. Faithful representation is a fundamental qualitative characteristic.'
  },
  {
      question: 'The enhancing qualitative characteristics of financial reporting are',
      choices: [
          { choice: 'Relevance, reliability, and faithful representation.',
              value: 'false'
          },
          { choice: 'Cost-benefit and materiality.',
              value: 'false'
          },
          { choice: 'Comparability, verifiability, timeliness, and understandability.',
              value: 'true'
          },
          { choice: 'Completeness, neutrality, and freedom from error.',
              value: 'false'
          }
      ],
      hint: "You're on your own, cowboy",
      explanation: '(c) The enhancing qualitative characteristics of financial reporting are comparability (including consistency), verifiability, timeliness, and understandability. Answer (a) is incorrect because relevance and faithful representation are fundamental qualitative characteristics of financial information. Reliability is no longer listed as a fundamental quality. Answer (b) is incorrect because cost-benefit is a constraint, and materiality is a threshold for reporting useful information. Answer (d) is incorrect because completeness, neutrality, and freedom from error are characteristics of faithful representation, a fundamental qualitative characteristic.'
  },
  {
      question: "According to Statements of Financial Accounting Concepts, neutrality is an ingredient of: Faithful representation | Relevance",
      choices: [
          { choice: 'YES | YES',
              value: 'false'
          },
          { choice: 'YES | NO',
              value: 'true'
          },
          { choice: 'NO | YES',
              value: 'false'
          },
          { choice: 'NO | NO',
              value: 'false'
          }
      ],
      hint: 'neutral info is free from bias, unbiased info is more reliable; unbiased info is not ALWAYS relevant; relevance is for usefulness',
      explanation: '(b) SFAC 8 defines neutrality as the quality of information which requires freedom from bias toward a predetermined result. Unbiased information would always be more faithfully represented than biased information. Other components of faithful representation include information to be verifiable and free from error. Neutrality is not an ingredient of relevance because relevance requires information to have predictive value and confirmatory value, or both.'
  },
]

const time = 30;

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <h1>CPA</h1>
        
        <p id='title-box'>Financial Accounting and Reporting</p>

        <div id='stats-box'>
          <Timer time={time} />
          <p id="displayScore">Score: 0 / 5</p>
        </div>

        <button id='exit-button'>Quit</button>
      </div>

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

      <div className="bottom-bar">
        <div className="bottom-reminder">
          <label>
            <input type="checkbox" name="reminder" checked disabled></input>
            = Reminder
          </label>
        </div>

        <div className="flag-buttons">
            <div>
                <button className="question-button" value="1">1</button>
                <input type="checkbox" name="flag_1" id="flag_1" />
            </div>
            <div>
                <button className="question-button" value="2">2</button>
                <input type="checkbox" name="flag_2" id="flag_2" />
            </div>
        </div>
        
        <div className="arrow-nav">
          <button id='previous' type="button" value="previous">Previous</button>
          <button id='next' type="button" value="next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
