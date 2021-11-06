(function () {
    var tags = document.getElementsByTagName('*');
    var i = tags.length - 1;
    var tag;
    while (i) {
        tag = tags[i];
        if (tag && tag.style) {
            tag.style.background = '#fff';
            tag.style.color = '#000';
            tag.style.wordWrap = 'break-word';
            tag.style.whiteSpace = 'pre-wrap';
            tag.style.overflow = 'auto';
            if (['PRE', 'CODE'].indexOf(tag.tagName) > -1) {
                tag.style.minHeight = '100%';
                tag.style.height = '100%';
                tag.style.maxHeight = '100%';
            }
        }
        i--;
    }

    window.print();
})();

