module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                username: String,
                email: String,
                password: String,
                tasks: [{type: mongoose.Schema.Types.ObjectId, ref: 'task'}]
            },
            { timestamps: true }
        )
    );

    return User;
};
