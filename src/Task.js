"use strict";

function Task(title) {
    this.done = false;
    this.title = title || '';
}

Task.prototype.render = function() {

    var checkstatus = 'unchecked';
    if (this.done) {
        checkstatus='checked';
    }

    var lielement = $("<li><input name='done' type='checkbox' "+ checkstatus+">"+
        "<input name='title' type='text' value='" + this.title + "'></li>")
    lielement.data('task', this);
    var task = this;

    lielement.find('input').change(function(event) {
        console.log('change event received');
        var target = $(this);
        if(target.attr('name') === 'done'){
            task.done = target.prop('checked');
            console.log(task.done);
        } else if (target.attr('name') === 'title') {
            task.title = target.val();
            console.log(task.title);
        }
    });

    lielement.find(':checkbox').on('change', function() {
        if (this.checked) {
            var target = $(this).parent();
            target.addClass( "finished" );
            target.appendTo(target.parent());
        }
    console.log('change event triggered');
    });

    return lielement;
};

Task.prototype.changestatus = function() {
    this.done = !this.done;
};


