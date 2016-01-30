$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();

        // Get form data
        var formData = {
            'name': $('input[name=name]').val()
        };

        if (formData.name == '') {
            console.log('form cannot be empty');
            return
        }

        // Create AJAX object
        $.ajax({
                type: 'POST',
                url: '/api/quiz',
                data: formData,
                dataType: 'json',
                encode: true
            })
            .error(function(response) {
                console.log('errrr');
            })
            .success(function(response) {
                $('form').trigger('reset').append("<p>Quiz created with the name of " + formData.name + '</p>');
                console.log(response);

            });
    });
});
