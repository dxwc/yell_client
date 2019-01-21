let static_dir, home_file;
{
    let path = require('path');
    static_dir = path.join(path.dirname(__filename), 'public');
    home_file = path.join(static_dir, 'home.html');
}

require('express')()
.use(require('express').static(static_dir))
.use((req, res) => res.sendFile(home_file))
.listen(process.env.PORT || '9002')
.on('listening', function() { console.info('Started', this.address()) });