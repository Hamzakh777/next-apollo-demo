import casual from 'casual';

casual.define('user', function () {
    return {
        emailAddress: casual.email,
        fullName: casual.full_name,
        address: casual.address,
        phoneNumber: casual.phone,
        hash: casual.uuid
    };
});

const array_of = function (times: number, generator: GeneratorFunction) {
    var result = [];

    for (var i = 0; i < times; ++i) {
        result.push(generator());
    }

    return result;
};

const userList = array_of(2000, (casual as any)._user);

console.log(userList);