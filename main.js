$(() => {
    let $tests = $("tests");
    for (let i = 0; i < tests.length; i++) {
        const test = tests[i];
        $tests.append(`<test>
        <question>${i+1}.${test.question}</question>
        <answers>
            <answer>
                <input type="radio" id="q${i}a0" name="q${i}" value="q${i}a0" ${test.answers[0].right ? "right" : "wrong"}>
                <label for="q${i}a0">${test.answers[0].text}</label>
            </answer>
            <answer>
                <input type="radio" id="q${i}a1" name="q${i}" value="q${i}a1" ${test.answers[1].right ? "right" : "wrong"}>
                <label for="q${i}a1">${test.answers[1].text}</label>
            </answer>
            <answer>
                <input type="radio" id="q${i}a2" name="q${i}" value="q${i}a2" ${test.answers[2].right ? "right" : "wrong"}>
                <label for="q${i}a2">${test.answers[2].text}</label>
            </answer>
        </answers>
    </test>`);
    }
});