'use strict';

const React = require('react');

const ResumePropTypes = require('../../prop_types/resume');
const Datetime = require('../../utils/datetime');

const Entry = React.createClass({
    propTypes: {
        entry: ResumePropTypes.education
    },

    render: function () {
        const startDate = Datetime.getDisplayFromDate(this.props.entry.startDate);
        let link = "";
        if (this.props.entry.link !== null) {
            link = (
                <p>
                    <i className={'fa fa-github'}/>
                    <a className='padded-icon' href={this.props.entry.link}>View on GitHub</a>
                </p>
            );
        }

        return (
            <div className='row item'>
                <div className='twelve columns'>
                    <h3>{this.props.entry.title}</h3>
                    <p className='info'>
                        {this.props.entry.org}
                        <span> &bull; </span>
                        {this.props.entry.location}
                        <br/>
                        <em className='date'>{this.props.entry.date}</em>

                    </p>
                    <p className='point'>
                        {this.props.entry.description}
                    </p>
                    {link}
                </div>
            </div>
        );
    }
});

const Talks = React.createClass({
    propTypes: {
        content: ResumePropTypes.educationSet
    },

    render: function () {
        console.log(this.props.content)
        return (
            <section id='talks'>
                <div className='row talks'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Talks</span>
                        </h1>
                    </div>
                    <div className='ten columns main-col'>
                        {this.props.content.map(function (entry, index) {
                            return (
                                <Entry key={index} entry={entry}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Talks;
