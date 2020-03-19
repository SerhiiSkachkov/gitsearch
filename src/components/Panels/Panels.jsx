import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Loader/Loader';
import Alert from '../Alert/Alert'
import './Panels.sass';
const Panels = ({
    error,
    items,
    search,
    isLoaded,
    totalCount,
    grid
}) => {

    if (isLoaded) { return <Loader /> }

    if (!items) { return <Alert value={"Find Some"} /> }

    return (
        <>
            <div className="search_panel">
                <div className="search_panel_title">Searching results</div>
                <div className="search_panel_count">{totalCount}</div>
            </div>

            <div className="panels">
                <div className="row">
                    {items.map(item => (
                        <div key={item.html_url} className={"col-12" + (grid ? " col-md-6 " : "")}>
                            <div className="panel">
                                <div className="panel_box">
                                    <div className="panel_header">
                                        <a className="panel_title" href={item.html_url} target="_blank">{item.name}</a>

                                        <div className="panel_rate">
                                            <div className="panel_rate-icon"><FontAwesomeIcon icon={faStar} /></div>
                                            <div className="panel_rate-count">{item.stargazers_count.toLocaleString()}</div>
                                        </div>
                                    </div>

                                    <div className="panel_body">
                                        {
                                            item.description
                                                ? item.description
                                                : "No comments here"
                                        }
                                    </div>

                                    <div className="panel_footer">
                                        <div className="panel_user">
                                            <div className="panel_user-img">
                                                <img src={item.owner.avatar_url} alt="user-img" />
                                            </div>

                                            <a href={item.owner.html_url} target="_blank" className="panel_user-name">
                                                {item.owner.login}
                                            </a>
                                        </div>

                                        <div className="panel_user-publish">
                                            <div>Published: </div>
                                            <div> {new Date(item.created_at).toLocaleString()} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Panels;
