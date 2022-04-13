import React from 'react';
import { useCallback, useState, useRef } from 'react';
import 'survey-react/modern.min.css';
import { Survey, StylesManager, Model } from 'survey-react';
import {useNavigate} from "react-router-dom";

StylesManager.applyTheme("bootstrap");

//OTHER OPTIONS ARE modern, orange, darkblue, stone, winter, winterstone, defaultV2

const surveyJSON = {


    pages: [{
        elements: [{
            name: "overall-experience",
            title: "How as your overall experience?",
            type: "radiogroup",
            choices: [
                {value: 5, text: "Fully Satisfying"},
                {value: 4, text: "Generally Satisfying"},
                {value: 3, text: "Neutral"},
                {value: 2, text: "Rather Unsatisfying"},
                {value: 1, text: "Not satisfying at all"},
                ],
                isRequired: true

        }]
    }, {
        elements: [{
            name: "word-of-mouth",
            title: "Would you recommend others to try out our platform?",
            type: "rating",
            rateMin: 0,
            rateMax: 10,
            isRequired: true

        }]
    }, {
        elements: [{
            name: "improvements",
            title: "How could improve our platform?",
            type: "comment",
            isRequired: true

        }]
    } , {
            elements: [{
                name: "competion",
                title: "What are some other social app that you use?",
                type: "comment",
                isRequired: true
            }]
        }

        ],

    showQuestionNumbers: "off",
    pageNextText: "Forward",
    completeText: "Submit",
    showPrevButton: true,
    firstPageIsStarted: true,
    startSurveyText: "Take the SurveyForm",
    showPreviewBeforeComplete: "showAnsweredQuestions",
    showProgressBar: "top",
    completeHtml: "Thank you for your feedback!",

};


const SurveyForm = () => {



    const navigate = useNavigate();

    // useRef enables the Model object to persist between state changes
    const survey = useRef(new Model(surveyJSON)).current;
    const [surveyResults, setSurveyResults] = useState("");
    const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

    const displayResults = useCallback((sender) => {
        setSurveyResults(JSON.stringify(sender.data, null, 4));
        setIsSurveyCompleted(true);
    }, []);

    survey.onComplete.add(displayResults);

    navigate("/");

    return (
        <>
            <Survey model={survey} id="surveyContainer" className="fade-in-animation text-center"/>
            {isSurveyCompleted && (
                <>
                    <p>Result JSON:</p>
                    <code className="text-center"  style={{ whiteSpace: 'pre' }}>
                        {surveyResults}
                    </code>
                </>
            )
            }
        </>
    );
}

export default SurveyForm;




