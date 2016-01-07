(function taskMockWrapper() {

    var AppConfig = require('./../config/appConfig');
    console.log('app config', AppConfig);
    /**
     * Task mock module object.
     * @type {Object}
     */
    var taskMock = {};

    /**
     * Task mock.
     * @type {Object}
     */
    var url = AppConfig.URL + "/task.html",
        tasks = [
        {
            author: "author",
            id: "1",
            command: "python: lol1",
            progress: "10",
            status: "active",
            link: url
        },
        {
            author: "author",
            id: "2",
            command: "python: lol1",
            progress: "55",
            status: "active",
            link: url
        },
        {
            author: "author",
            id: "3",
            command: "python: lol1",
            progress: "95",
            status: "active",
            link: url
        },
        {
            author: "author",
            id: "4",
            command: "python: lol1",
            progress: "100",
            status: "active",
            link: url
        }
    ],
    // var tasks = [{
    //     link: AppConfig.URL + '/task.html',
    //     id: 3434242,
    //     status: 'in-progress',
    //     progress: '67%',
    //     author: 'admin',
    //     history: [{
    //         status: 'created',
    //         author: 'admin',
    //         date: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'started',
    //         author: 'admin2',
    //         date: 'Mon Dec 28 2015 01:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'suspended',
    //         author: 'admin',
    //         date: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'started',
    //         author: 'admin2',
    //         date: 'Mon Dec 28 2015 05:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'finished',
    //         author: 'server',
    //         date: 'Mon Dec 28 2015 06:30:58 GMT+0100 (CET)'
    //     }],
    //     command: 'python taskLol.py -s -m -lol',
    //     logs: [{
    //         status: 'error',
    //         msg: 'Controlling a generator exhaustion >>> class Bank(): # let\'s create a bank,' +
    //             'building ATMs...crisis = False...def create_atm(self): ...while not self.crisis:' +
    //             '...yield "$100" >>> hsbc = Bank()# when everything\'s ok the ATM gives you as much as' +
    //             'you want >>> corner_street_atm = hsbc.create_atm() >>> print(corner_street_atm.next())' +
    //             '$100 >>> print(corner_street_atm.next()) $100 >>> print([corner_street_atm.next() for' +
    //             'cash in range(5)' +
    //             '])[] >>> hsbc.crisis = True# crisis is coming,' +
    //             ' no more money! >>> ' +
    //             'print(corner_street_atm.next()) >>> wall_street_atm = hsbc.create_atm()# it\'s even true' +
    //             'for new ATMs >>> print(wall_street_atm.next()) >>> hsbc.crisis = False# trouble is, even' +
    //             'post - crisis the ATM remains empty >>> print(corner_street_atm.next()) >>> brand_new_atm =' +
    //             'hsbc.create_atm()# build a new one toget back in business >>>' +
    //             'for cash in brand_new_atm: ...' +
    //             'print cash $100 $100 $100 $100 $100 $100 $100 $100 $100...It can be useful' +
    //             'for various' +
    //             'things like controlling access to a resource.Itertools,' +
    //             'your best friend The itertools module' +
    //             'contains special functions to manipulate iterables.Ever wish to duplicate a generator ? Chain two' +
    //             'generators ? Group values in a nested list with a one liner ? Map / Zip without creating another list ? Then just' +
    //             'import itertools.An example ? Let \'s see the possible orders of arrival for a 4 horse race: >>> horses' +
    //             '= [1, 2, 3, 4] >>> races = itertools.permutations(horses) >>> print(races) >>> print(list(itertools.permutations' +
    //             '(horses))) [(1, 2, 3, 4), (1, 2, 4, 3), (1, 3, 2, 4), (1, 3, 4, 2), (1, 4, 2, 3), (1, 4, 3, 2), (2, 1, 3, 4)' +
    //             ', (2, 1, 4, 3), (2, 3, 1, 4), (2, 3, 4, 1), (2, 4, 1, 3), (2, 4, 3, 1), (3, 1, 2, 4), (3, 1, 4, 2),' +
    //             ' (3, 2, 1, 4), (3, 2, 4, 1), (3, 4, 1, 2), (3, 4, 2, 1), (4, 1, 2, 3), (4, 1, 3, 2), (4, 2, 1, 3), ' +
    //             ' (4, 2, 3, 1), (4, 3, 1, 2), (4, 3, 2, 1)] Understanding the inner mechanisms of iteration Iteration' +
    //             'is a process implying iterables (implementing the __iter__() method) and iterators (implementing the ' +
    //             '__next__() method). Iterables are any objects you can get an iterator from. Iterators are objects that ' +
    //             ' let you iterate on iterables. More about it in this article about how does the for loop work."'
    //     }, {
    //         status: 'info',
    //         msg: 'no nieźle'
    //     }]
    // },
    // {
    //     link: AppConfig.URL + '/task.html',
    //     id: 34344242,
    //     status: 'in-progress',
    //     progress: '67%',
    //     author: 'admin',
    //     history: [{
    //         status: 'created',
    //         author: 'admin',
    //         date: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'started',
    //         author: 'admin2',
    //         date: 'Mon Dec 28 2015 01:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'suspended',
    //         author: 'admin',
    //         date: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'started',
    //         author: 'admin2',
    //         date: 'Mon Dec 28 2015 05:30:58 GMT+0100 (CET)'
    //     }, {
    //         status: 'finished',
    //         author: 'server',
    //         date: 'Mon Dec 28 2015 06:30:58 GMT+0100 (CET)'
    //     }],
    //     command: 'python taskLol.py -s -m -lol',
    //     logs: [{
    //         status: 'error',
    //         msg: 'Controlling a generator exhaustion >>> class Bank(): # let\'s create a bank,' +
    //             'building ATMs...crisis = False...def create_atm(self): ...while not self.crisis:' +
    //             '...yield "$100" >>> hsbc = Bank()# when everything\'s ok the ATM gives you as much as' +
    //             'you want >>> corner_street_atm = hsbc.create_atm() >>> print(corner_street_atm.next())' +
    //             '$100 >>> print(corner_street_atm.next()) $100 >>> print([corner_street_atm.next() for' +
    //             'cash in range(5)' +
    //             '])[] >>> hsbc.crisis = True# crisis is coming,' +
    //             ' no more money! >>> ' +
    //             'print(corner_street_atm.next()) >>> wall_street_atm = hsbc.create_atm()# it\'s even true' +
    //             'for new ATMs >>> print(wall_street_atm.next()) >>> hsbc.crisis = False# trouble is, even' +
    //             'post - crisis the ATM remains empty >>> print(corner_street_atm.next()) >>> brand_new_atm =' +
    //             'hsbc.create_atm()# build a new one toget back in business >>>' +
    //             'for cash in brand_new_atm: ...' +
    //             'print cash $100 $100 $100 $100 $100 $100 $100 $100 $100...It can be useful' +
    //             'for various' +
    //             'things like controlling access to a resource.Itertools,' +
    //             'your best friend The itertools module' +
    //             'contains special functions to manipulate iterables.Ever wish to duplicate a generator ? Chain two' +
    //             'generators ? Group values in a nested list with a one liner ? Map / Zip without creating another list ? Then just' +
    //             'import itertools.An example ? Let \'s see the possible orders of arrival for a 4 horse race: >>> horses' +
    //             '= [1, 2, 3, 4] >>> races = itertools.permutations(horses) >>> print(races) >>> print(list(itertools.permutations' +
    //             '(horses))) [(1, 2, 3, 4), (1, 2, 4, 3), (1, 3, 2, 4), (1, 3, 4, 2), (1, 4, 2, 3), (1, 4, 3, 2), (2, 1, 3, 4)' +
    //             ', (2, 1, 4, 3), (2, 3, 1, 4), (2, 3, 4, 1), (2, 4, 1, 3), (2, 4, 3, 1), (3, 1, 2, 4), (3, 1, 4, 2),' +
    //             ' (3, 2, 1, 4), (3, 2, 4, 1), (3, 4, 1, 2), (3, 4, 2, 1), (4, 1, 2, 3), (4, 1, 3, 2), (4, 2, 1, 3), ' +
    //             ' (4, 2, 3, 1), (4, 3, 1, 2), (4, 3, 2, 1)] Understanding the inner mechanisms of iteration Iteration' +
    //             'is a process implying iterables (implementing the __iter__() method) and iterators (implementing the ' +
    //             '__next__() method). Iterables are any objects you can get an iterator from. Iterators are objects that ' +
    //             ' let you iterate on iterables. More about it in this article about how does the for loop work."'
    //     }, {
    //         status: 'info',
    //         msg: 'no nieźle'
    //     }]
    // }];

    task = {
        link: AppConfig.URL + '/task.html',
        id: 34344242,
        status: 'in-progress',
        progress: '67%',
        author: 'admin',
        history: [{
            status: 'created',
            author: 'admin',
            date: 'Mon Dec 28 2015 00:30:58 GMT+0100 (CET)'
        }, {
            status: 'started',
            author: 'admin2',
            date: 'Mon Dec 28 2015 01:30:58 GMT+0100 (CET)'
        }, {
            status: 'suspended',
            author: 'admin',
            date: 'Mon Dec 28 2015 02:30:58 GMT+0100 (CET)'
        }, {
            status: 'started',
            author: 'admin2',
            date: 'Mon Dec 28 2015 05:30:58 GMT+0100 (CET)'
        }, {
            status: 'finished',
            author: 'server',
            date: 'Mon Dec 28 2015 06:30:58 GMT+0100 (CET)'
        }],
        command: 'python taskLol.py -s -m -lol',
        logs: [{
            status: 'error',
            msg: 'Controlling a generator exhaustion >>> class Bank(): # let\'s create a bank,' +
                'building ATMs...crisis = False...def create_atm(self): ...while not self.crisis:' +
                '...yield "$100" >>> hsbc = Bank()# when everything\'s ok the ATM gives you as much as' +
                'you want >>> corner_street_atm = hsbc.create_atm() >>> print(corner_street_atm.next())' +
                '$100 >>> print(corner_street_atm.next()) $100 >>> print([corner_street_atm.next() for' +
                'cash in range(5)' +
                '])[] >>> hsbc.crisis = True# crisis is coming,' +
                ' no more money! >>> ' +
                'print(corner_street_atm.next()) >>> wall_street_atm = hsbc.create_atm()# it\'s even true' +
                'for new ATMs >>> print(wall_street_atm.next()) >>> hsbc.crisis = False# trouble is, even' +
                'post - crisis the ATM remains empty >>> print(corner_street_atm.next()) >>> brand_new_atm =' +
                'hsbc.create_atm()# build a new one toget back in business >>>' +
                'for cash in brand_new_atm: ...' +
                'print cash $100 $100 $100 $100 $100 $100 $100 $100 $100...It can be useful' +
                'for various' +
                'things like controlling access to a resource.Itertools,' +
                'your best friend The itertools module' +
                'contains special functions to manipulate iterables.Ever wish to duplicate a generator ? Chain two' +
                'generators ? Group values in a nested list with a one liner ? Map / Zip without creating another list ? Then just' +
                'import itertools.An example ? Let \'s see the possible orders of arrival for a 4 horse race: >>> horses' +
                '= [1, 2, 3, 4] >>> races = itertools.permutations(horses) >>> print(races) >>> print(list(itertools.permutations' +
                '(horses))) [(1, 2, 3, 4), (1, 2, 4, 3), (1, 3, 2, 4), (1, 3, 4, 2), (1, 4, 2, 3), (1, 4, 3, 2), (2, 1, 3, 4)' +
                ', (2, 1, 4, 3), (2, 3, 1, 4), (2, 3, 4, 1), (2, 4, 1, 3), (2, 4, 3, 1), (3, 1, 2, 4), (3, 1, 4, 2),' +
                ' (3, 2, 1, 4), (3, 2, 4, 1), (3, 4, 1, 2), (3, 4, 2, 1), (4, 1, 2, 3), (4, 1, 3, 2), (4, 2, 1, 3), ' +
                ' (4, 2, 3, 1), (4, 3, 1, 2), (4, 3, 2, 1)] Understanding the inner mechanisms of iteration Iteration' +
                'is a process implying iterables (implementing the __iter__() method) and iterators (implementing the ' +
                '__next__() method). Iterables are any objects you can get an iterator from. Iterators are objects that ' +
                ' let you iterate on iterables. More about it in this article about how does the for loop work."'
        }, {
            status: 'info',
            msg: 'no nieźle'
        }]
    };

    /**
     * Returns task details.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getDetails(taskId) {
        return {
            id: task.id,
            author: task.author,
            status: task.status,
            progress: task.progress,
            history: task.history,
            command: task.command
        };
    }

    /**
     * Returns task details without history and logs.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getDetailsLite(taskId) {
        return {
            id: task.id,
            author: task.author,
            status: task.status,
            progress: task.progress,
            command: task.command
        };
    }

    /**
     * Returns task list.
     * @return {Array}
     */
    function getTaskList() {
        console.log('task list mock');
        return tasks;
    }

    /**
     * Returns task logs.
     * @param  {Number} taskId
     * @return {Obcject}
     */
    function getLogs(taskId) {
        return {
            id: task.id,
            progress: task.progress,
            logs: task.logs
        };
    }

    taskMock = {
        getDetails: getDetails,
        getDetailsLite: getDetailsLite,
        getLogs: getLogs,
        getTaskList: getTaskList
    };

    module.exports = taskMock;

})();
