let counter=0;
function attachEvents() {
    let username='Anonymous';
    let typeMsg;


    $('#logBtn').on('click',attachMsg);

    $('#setUsername').on('click',setUsername);

    function setUsername() {
        if (/\S+/.test($('#usernameInput').val())) {
            if($('#setUsername').text()==='Set username'){

                username=$('#usernameInput').val();
                $('#setUsername').text('Log out');
                $('#settedUsername').append($("<h3 id='loggedUser'>"+username+"</h3>"));

                $('#usernameInput').remove();
            }else{
                let username='Anonymous';
                $('#loggedUser').remove();
                $('#setUsername').text('Set username');
                $('#settedUsername').append($('<input type="text" class="form-control" id="usernameInput" placeholder="username">)');
            }
        }
    }

    function deleteRow() {
        let row=$(this).parent().remove();
        counter--;
        checkForEmpty();
    }
    function attachMsg() {
        let logs=$('#logs');
        let message=$('#message').val();
        let container;


    if($('#successBtn').is(':checked')){
    typeMsg='Success';
    container=successMsg();

    }else if($('#infoBtn').is(':checked')){
    typeMsg = 'Info';
    container = infoMsg()
    }else if($('#errorBtn').is(':checked')){
    typeMsg = 'Error';
    container = errorMsg();
    }

    let textMsg=typeMsg+ " : " + message;
    let messageBox=($("<div class='col-6 h3'>"+textMsg+"</div>"));

    let usernameBox=($("<div class='col-3 h3 border-dark border-left border-right text-center border:2px px-5'>"+username+"</div>"));
    let archiveBox=($("<div class='archive col-3 h3 text-center'>"+"Archive"+"</div>"));

        container.append(messageBox);
        container.append(usernameBox);
        container.append(archiveBox);
        logs.append(container);
        logs.append();

        $('#message').val('');
        counter++;
        checkForEmpty()

        $('.archive:last').click(deleteRow);


    }
    function checkForEmpty() {
        if(counter > 0){
            $('#emptyDb').css('display','none');
        }else {
            $('#emptyDb').css('display','block');
        }
    }
    function successMsg(){
        return $('<div class="text-white bg-success py-3 container  mb-3 row rounded"></div>');
    }
    function infoMsg() {
        return $('<div class="text-white bg-info py-3 container  mb-3 row rounded"></div>');
    }
    function errorMsg() {
        return $('<div class="text-white bg-danger py-3 container mb-3 row rounded"></div>');
    }

}

attachEvents()