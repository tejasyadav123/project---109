function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/28711ZBJL/model.json", modelready)
}

function modelready() {
    classifier.classify(gotresult)
}

var dog = 0
var cat = 0
var lion = 0

function gotresult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
    random_number_r = Math.floor(Math.random() * 255)+1
    random_number_g = Math.floor(Math.random() * 255)+1
    random_number_b = Math.floor(Math.random() * 255)+1

    document.getElementById("result_labal").innerHTML = "I can hear - "+result[0].label
    document.getElementById("result_labal").style.color = "rgb("+ random_number_r +","+ random_number_g+","+random_number_b+")"

    document.getElementById("result_count").style.color = "rgb("+ random_number_r +","+ random_number_g+","+random_number_b+")"
    document.getElementById("result_count").innerHTML = "Accuracy - "+result[0].confidence

    if(result[0].label == "dog"){
    document.getElementById("animal_img").src ="dog.gif"    
    }

    if(result[0].label == "cat"){
        document.getElementById("animal_img").src ="cat.gif"    
        }

        if(result[0].label == "lion"){
            document.getElementById("animal_img").src ="lion"    
            }    
    
    }
}

