function printBlogPost() {
    var printContent = document.getElementById('blogContent').innerHTML;
    var newWindow = window.open('', '', 'height=600,width=800');
    newWindow.document.write(
        '<html><head><title>Print Blog Post</title>' +
        '<style>.blog-content { font-family: Arial, sans-serif; margin: 20px; }</style>' +
        '</head><body>' +
        printContent +
        '</body></html>'
    );
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
}
