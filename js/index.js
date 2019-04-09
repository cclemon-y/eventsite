var $sideBarItems = $('.sideBar .sideBar__item');

$sideBarItems.click(function(event) {
    var selectedClass = 'is-side-bar-item-selected';
    $sideBarItems.removeClass(selectedClass);
    $(event.target).addClass(selectedClass);
});