
var person = {fName: "John", lName:"Doe", age:50, favColor:"blue"};
document.getElementById('demo').innerHTML = person;



function alto(fahrenheit, yup){
	return (yup) * (fahrenheit);
}
document.getElementById('demo').innerHTML = alto(33, 4);

var text = "What we actually wanted to see is " + alto(33, 4) +" years"
//window.alert(text);




<p id="demo" class="ultrap">This is a test for you to view. it was written in javascript language click the clock button and the p wil change</p>
			<script type="text/javascript">
				function alto(){
					document.getElementById('demo').innerHTML = "Paragraph changed! I told you this would happen if you clicked the button";
				}
				function altor(){
					document.getElementById('demo').innerHTML = "This is a test for you to view. it was written in javascript language click the clock button and the p wil change" ;
				}
			</script>