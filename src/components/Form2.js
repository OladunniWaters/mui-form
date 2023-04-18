
function Form2() {
  return (
    <div className="app">
        <form id="contactform" action="https://formsubmit.io/send/oladunniwaters@gmail.com" method="POST">
   Name <input name="name" type="name" id="name" />
  Email  <input name="email" type="email" id="email" />
    <textarea name="comment" id="comment" rows="3"></textarea>

    <input name="_formsubmit_id" type="text" style={{display: 'none'}} />

    <input value="Submit" type="submit" />
</form>
    </div>
  );
}

export default Form2;
