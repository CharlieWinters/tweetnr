import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Tabs, TabsItem,NrqlQuery, } from 'nr1'

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class TweetnrNerdletNerdlet extends React.Component {
    render() {
        return <Tabs defaultValue="tab-3">
                    <TabsItem value="tab-1" label="Wall of Fame">
                    <NrqlQuery accountId={1652861} query="SELECT uniques(tweetId) from sentimentSample where type = 'positive'">
                            {({ data }) => {
                                if (data){
                                    debugger
                                    return data[0].data.map(datapoint => {
                                        return (
                                                <TwitterTweetEmbed
                                                    tweetId={datapoint.tweetId}
                                                />
                                            )
                                    })
                                }
                                return 'loading'
                            }}
                    </NrqlQuery>
                    </TabsItem>
                    <TabsItem value="tab-2" label="Wall of Shame">
                    <NrqlQuery accountId={1652861} query="SELECT uniques(tweetId) from sentimentSample where type = 'negative'">
                            {({ data }) => {
                                if (data){
                                    debugger
                                    return data[0].data.map(datapoint => {
                                        return (
                                                <TwitterTweetEmbed
                                                    tweetId={datapoint.tweetId}
                                                />
                                            )
                                    })
                                }
                                return 'loading'
                            }}
                    </NrqlQuery>
                    </TabsItem>
                </Tabs>


    }
}
